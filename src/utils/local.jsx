const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare report",
        "description": "Monthly sales report preparation",
        "date": "2025-08-13",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Weekly team sync-up",
        "date": "2025-08-14",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "description": "Call clients for feedback",
        "date": "2025-08-15",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Code review",
        "description": "Review code of team members",
        "date": "2025-08-13",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update documentation",
        "description": "Update project docs",
        "date": "2025-08-14",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Bug fixing",
        "description": "Fix reported bugs in module",
        "date": "2025-08-13",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy app",
        "description": "Deploy latest version to staging",
        "date": "2025-08-14",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Performance test",
        "description": "Run load tests for the app",
        "date": "2025-08-15",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design UI",
        "description": "Create UI mockups for new feature",
        "date": "2025-08-13",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client presentation",
        "description": "Present new features to client",
        "date": "2025-08-14",
        "category": "Presentation",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug investigation",
        "description": "Investigate reported UI bug",
        "date": "2025-08-15",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database migration",
        "description": "Migrate database to new server",
        "date": "2025-08-13",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code optimization",
        "description": "Optimize queries for performance",
        "date": "2025-08-14",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team training",
        "description": "Conduct training on new tech",
        "date": "2025-08-15",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]

const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) ;
    const admin = JSON.parse(localStorage.getItem("admin")) ;
    return {employees,admin}
}
