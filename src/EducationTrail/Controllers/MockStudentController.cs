using Microsoft.AspNetCore.Mvc;
using EducationTrail.Models;

namespace EducationTrail.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class MockStudentController : ControllerBase
    {
        private readonly ILogger<MockStudentController> _logger;

        public MockStudentController(ILogger<MockStudentController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public Students Get()
        {
            return new Students{
              Name="Wesley Ford",
              Univeristy="PCC"
            };
        }
    }
}
