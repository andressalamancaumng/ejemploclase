import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.projectmanager.service.ProjectService;
import com.example.projectmanager.model.Project;

@SpringBootTest
public class ProjectServiceTest {

    @Autowired
    private ProjectService projectService;

    @Test
    public void testCreateProject() {
        Project project = new Project("Nuevo Proyecto", "Descripción del proyecto", LocalDate.now(), LocalDate.now().plusDays(30));
        Project createdProject = projectService.createProject(project);

        assertNotNull(createdProject);
        assertEquals("Nuevo Proyecto", createdProject.getName());
    }

    @Test
    public void testGetAllProjects() {
        List<Project> projects = projectService.getAllProjects();
        assertNotNull(projects);
        assertTrue(projects.size() > 0);
    }
}
