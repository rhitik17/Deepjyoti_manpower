export const jobData = {
  jobs_count: 5,
  applications_count: null, // Add the actual value if applicable
  companies_count: 5,
  recent_jobs: [
    {
      id: 1,
      title: "Software Engineer",
      image: "/images/plane.jpg",
      job_type: "Full Time",
      min_salary: "50k",
      max_salary: "55k",
      currency: "EUR",
      job_location: "Brussels, Belgium",
      created_at: "2024-12-05T10:59:12.582753Z", // Adjust dates if necessary
      company: {
        id: 1,
        name: "Linear Technologies"
      },
      category: {
        id: 1,
        name: "Tech",
        image: null,
        jobs_count: 1
      }
    },
    {
      id: 2,
      title: "Junior UI Designer",
      image: "/images/hero.png",
      job_type: "Full Time",
      min_salary: "30k",
      max_salary: "32k",
      currency: "EUR",
      job_location: "Madrid, Spain",
      created_at: "2024-12-05T10:59:12.582753Z",
      company: {
        id: 2,
        name: "Notion Labs"
      },
      category: {
        id: 1,
        name: "Tech",
        image: null,
        jobs_count: 1
      }
    },
    {
      id: 3,
      title: "Technical Support Engineer",
      image: "/images/group.png",
      job_type: "Full Time",
      min_salary: "50k",
      max_salary: "52k",
      currency: "USD",
      job_location: "San Francisco, USA",
      created_at: "2024-12-05T10:59:12.582753Z",
      company: {
        id: 3,
        name: "Spline Studios"
      },
      category: {
        id: 1,
        name: "Tech",
        image: null,
        jobs_count: 1
      }
    },
    {
      id: 4,
      title: "DevOps Engineer",
      image: "/images/plane.jpg",
      job_type: "Full Time",
      min_salary: "60k",
      max_salary: "70k",
      currency: "EUR",
      job_location: "Berlin, Germany",
      created_at: "2024-12-05T10:59:12.582753Z",
      company: {
        id: 4,
        name: "Techtonic Solutions"
      },
      category: {
        id: 1,
        name: "Tech",
        image: null,
        jobs_count: 1
      }
    },
    {
      id: 5,
      title: "Cloud Solutions Architect",
      image: "/images/hero.png",
      job_type: "Full Time",
      min_salary: "80k",
      max_salary: "90k",
      currency: "GBP",
      job_location: "London, UK",
      created_at: "2024-12-05T10:59:12.582753Z",
      company: {
        id: 5,
        name: "CloudFlex Technologies"
      },
      category: {
        id: 1,
        name: "Tech",
        image: null,
        jobs_count: 1
      }
    }
  ],
  categories: [
    {
      id: 1,
      name: "Tech",
      image: null,
      jobs_count: 5
    }
  ],
  top_companies: [
    {
      id: 1,
      name: "Linear Technologies",
      logo: null,
      description: "Join our growing team as a Software Engineer and work on cutting-edge technologies."
    },
    {
      id: 2,
      name: "Notion Labs",
      logo: null,
      description: "Looking for a creative UI Designer to collaborate on projects."
    },
    {
      id: 3,
      name: "Spline Studios",
      logo: null,
      description: "We are seeking a Technical Support Engineer to assist customers."
    },
    {
      id: 4,
      name: "Techtonic Solutions",
      logo: null,
      description: "Techtonic Solutions is seeking a DevOps Engineer to streamline our deployment pipelines."
    },
    {
      id: 5,
      name: "CloudFlex Technologies",
      logo: null,
      description: "As a Cloud Solutions Architect at CloudFlex, you will design cloud-based solutions."
    }
  ],
  testimonials: [] 
};
