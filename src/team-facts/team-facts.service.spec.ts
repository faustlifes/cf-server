import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TeamFactsService } from './team-facts.service';
import { TeamFactEntity } from '../entities/TeamFact.entity';

const mockRepo = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('TeamFactsService', () => {
  let service: TeamFactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamFactsService,
        { provide: getRepositoryToken(TeamFactEntity), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<TeamFactsService>(TeamFactsService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('update', () => {
    it('throws NotFoundException when item does not exist', async () => {
      mockRepo.findOne.mockResolvedValueOnce(null);
      await expect(service.update('nonexistent-id', { value: 99 })).rejects.toThrow(NotFoundException);
      expect(mockRepo.update).not.toHaveBeenCalled();
    });

    it('updates and returns the item when it exists', async () => {
      const existing = { id: '1', value: 1 };
      const updated = { id: '1', value: 99 };
      mockRepo.findOne.mockResolvedValueOnce(existing).mockResolvedValueOnce(updated);
      mockRepo.update.mockResolvedValueOnce({ affected: 1 });
      const result = await service.update('1', { value: 99 });
      expect(mockRepo.update).toHaveBeenCalledWith('1', { value: 99 });
      expect(result).toEqual(updated);
    });
  });
});
