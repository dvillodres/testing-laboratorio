import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('./pods/project/project.mapper', () => {

  it('should return empty project when feeding undefined project', () => {
    // Arrange
    const projectList = undefined;

    // Act
    const result = mapProjectFromApiToVm(projectList);

    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return empty project when feeding null project', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return one item with values when passing one item with values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'qwerty1234ID',
      name: 'Project Name',
      externalId: 'qwerty1234ExternalID',
      comments: null,
      isActive: true,
      employees: [
        {
          id: 'qwerty1234EmployeeID',
          isAssigned: false,
          employeeName: "John"
        }
      ]
    };

    const expectedResult: viewModel.Project = {
      id: 'qwerty1234ID',
      name: 'Project Name',
      externalId: 'qwerty1234ExternalID',
      comments: null,
      isActive: true,
      employees: [
        {
          id: 'qwerty1234EmployeeID',
          isAssigned: false,
          employeeName: "John"
        }
      ]
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });


  const emptyProject: viewModel.Project = {
    id: '',
    name: '',
    externalId: '',
    comments: '',
    isActive: false,
    employees: []
  };
});
