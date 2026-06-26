import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FeedbackService } from './feedback.service';
import { FeedbackEntity } from '../entities/Feedback.entity';

const mockRepo = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('FeedbackService', () => {
  let service: FeedbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeedbackService,
        { provide: getRepositoryToken(FeedbackEntity), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<FeedbackService>(FeedbackService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('update', () => {
    it('throws NotFoundException when item does not exist', async () => {
      mockRepo.findOne.mockResolvedValueOnce(null);
      await expect(service.update('nonexistent-id', { author: 'New' })).rejects.toThrow(NotFoundException);
      expect(mockRepo.update).not.toHaveBeenCalled();
    });

    it('updates and returns the item when it exists', async () => {
      const existing = { id: '1', author: 'Old' };
      const updated = { id: '1', author: 'New' };
      mockRepo.findOne.mockResolvedValueOnce(existing).mockResolvedValueOnce(updated);
      mockRepo.update.mockResolvedValueOnce({ affected: 1 });
      const result = await service.update('1', { author: 'New' });
      expect(mockRepo.update).toHaveBeenCalledWith('1', { author: 'New' });
      expect(result).toEqual(updated);
    });
  });
});
