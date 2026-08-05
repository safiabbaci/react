import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      name: "Google",
      datePosted: "2 days ago",
      post: "Senior Software Engineer - Search Infrastructure",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85-110/hr",
      location: "Mountain View, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      name: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer - Swift/UIKit Specialist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75-95/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      name: "Amazon",
      datePosted: "5 days ago",
      post: "Cloud Solutions Architect - AWS",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90-120/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      name: "Meta (Facebook)",
      datePosted: "3 weeks ago",
      post: "Frontend Engineer - React/GraphQL",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65-80/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      datePosted: "10 days ago",
      post: "DevOps Engineer - Azure/Kubernetes",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80-100/hr",
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      name: "Netflix",
      datePosted: "6 days ago",
      post: "Backend Engineer - Microservices/Java",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$100-130/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      name: "NVIDIA",
      datePosted: "2 weeks ago",
      post: "AI/ML Engineer - Deep Learning",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95-115/hr",
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      name: "Salesforce",
      datePosted: "4 days ago",
      post: "Full Stack Developer - React/Node.js",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70-90/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      name: "Oracle",
      datePosted: "8 weeks ago",
      post: "Database Administrator - SQL/NoSQL",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$50-65/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/intel.com",
      name: "Intel",
      datePosted: "3 days ago",
      post: "Hardware Validation Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75-90/hr",
      location: "Hillsboro, USA",
    },
  ];

  return (
    <div className="parent">
      
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card logo={elem.brandLogo} name={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
        )
      })}

    </div>
  );
};

export default App;
