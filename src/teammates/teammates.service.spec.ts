import { Test, TestingModule } from '@nestjs/testing';
import { TeammatesService } from './teammates.service';

describe('TeammatesService', () => {
  let service: TeammatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeammatesService,
        {
          provide: 'TeammateEntityRepository',
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TeammatesService>(TeammatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
