import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TeammatesService } from './teammates.service';
import { TeammateEntity } from '../entities/Teammate.entity';

const mockRepo = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('TeammatesService', () => {
  let service: TeammatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeammatesService,
        { provide: getRepositoryToken(TeammateEntity), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<TeammatesService>(TeammatesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('update', () => {
    it('throws NotFoundException when item does not exist', async () => {
      mockRepo.findOne.mockResolvedValueOnce(null);
      await expect(service.update('nonexistent-id', { name: 'New' })).rejects.toThrow(NotFoundException);
      expect(mockRepo.update).not.toHaveBeenCalled();
    });

    it('updates and returns the item when it exists', async () => {
      const existing = { id: '1', name: 'Old' };
      const updated = { id: '1', name: 'New' };
      mockRepo.findOne.mockResolvedValueOnce(existing).mockResolvedValueOnce(updated);
      mockRepo.update.mockResolvedValueOnce({ affected: 1 });
      const result = await service.update('1', { name: 'New' });
      expect(mockRepo.update).toHaveBeenCalledWith('1', { name: 'New' });
      expect(result).toEqual(updated);
    });
  });
});
