import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AboutService } from './about.service';
import { AboutContentEntity } from '../entities/AboutContent.entity';

const mockRepo = {
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('AboutService', () => {
  let service: AboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AboutService,
        { provide: getRepositoryToken(AboutContentEntity), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<AboutService>(AboutService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('update', () => {
    it('throws NotFoundException when item does not exist', async () => {
      mockRepo.findOne.mockResolvedValueOnce(null);
      await expect(service.update('nonexistent-id', { description: 'New' })).rejects.toThrow(NotFoundException);
      expect(mockRepo.update).not.toHaveBeenCalled();
    });

    it('updates and returns the correct item by id when it exists', async () => {
      const existing = { id: '1', description: 'Old' };
      const updated = { id: '1', description: 'New' };
      mockRepo.findOne.mockResolvedValueOnce(existing).mockResolvedValueOnce(updated);
      mockRepo.update.mockResolvedValueOnce({ affected: 1 });
      const result = await service.update('1', { description: 'New' });
      expect(mockRepo.update).toHaveBeenCalledWith('1', { description: 'New' });
      expect(result).toEqual(updated);
      expect(mockRepo.findOne).toHaveBeenCalledWith({ where: { id: '1' } });
    });
  });
});
