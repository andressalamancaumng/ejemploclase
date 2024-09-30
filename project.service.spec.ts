import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProjectService } from './project.service';
import { Project } from './project.model';

describe('ProjectService', () => {
  let service: ProjectService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectService]
    });

    service = TestBed.inject(ProjectService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve all projects', () => {
    const dummyProjects: Project[] = [
      { name: 'Project 1', description: 'Test Project 1', startDate: '2024-10-01', endDate: '2024-10-31' },
      { name: 'Project 2', description: 'Test Project 2', startDate: '2024-10-01', endDate: '2024-11-15' }
    ];

    service.getProjects().subscribe(projects => {
      expect(projects.length).toBe(2);
      expect(projects).toEqual(dummyProjects);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/projects`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProjects);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
