import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SliderService } from './slider.service';
import { SliderItemEntity } from '../entities/SliderItem.entity';

const mockRepo = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('SliderService', () => {
  let service: SliderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SliderService,
        { provide: getRepositoryToken(SliderItemEntity), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<SliderService>(SliderService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('update', () => {
    it('throws NotFoundException when item does not exist', async () => {
      mockRepo.findOne.mockResolvedValueOnce(null);
      await expect(service.update('nonexistent-id', { title: 'New' })).rejects.toThrow(NotFoundException);
      expect(mockRepo.update).not.toHaveBeenCalled();
    });

    it('updates and returns the item when it exists', async () => {
      const existing = { id: '1', title: 'Old' };
      const updated = { id: '1', title: 'New' };
      mockRepo.findOne.mockResolvedValueOnce(existing).mockResolvedValueOnce(updated);
      mockRepo.update.mockResolvedValueOnce({ affected: 1 });
      const result = await service.update('1', { title: 'New' });
      expect(mockRepo.update).toHaveBeenCalledWith('1', { title: 'New' });
      expect(result).toEqual(updated);
    });
  });
});
