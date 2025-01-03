import React from "react";

const companyData = [
  { label: "Year of Established", value: "2016" },
  { label: "No. of Employees", value: "10" },
  { label: "Board of Directors", value: "04" },
  {
    label: "Registration",
    value:
      "Private Limited Company, As per the Company Act of Government of Nepal, Ministry of Labour.",
  },
  { label: "Country Registered", value: "Nepal" },
  {
    label: "Primary Type of Business",
    value:
      "Human Resource Provider popularly known as Manpower Agency",
  },
  {
    label: "Key Services",
    value:
      "Placement of Nepali Human Resources in overseas countries and conducting skilled development trainings in Nepal.",
  },
  {
    label: "Countries We Serve",
    value:
      "The Government of Nepal has enlisted 100+ countries where we can legally recruit Nepali Manpower. The major countries we serve are; Qatar, Kingdom of Saudi Arabia, United Arab Emirates, Oman, Kuwait, Bahrain, Malaysia, etc.",
  },
  { label: "Address", value: "Sinamangal-9, Kathmandu, Nepal" },
  {
    label: "Telephone",
    value: "+977-1-4492910 | Fax: +977-1-4490678",
  },
  {
    label: "E-mail",
    value: "deepjyotimanpower1136@gmail.com",
  },
  {
    label: "Website",
    value: "www.deepjyotimanpower.com.np",
    isLink: true,
  },
  { label: "Registration No.", value: "160629/073/074 (Department of Foreign Employment)" },
  { label: "License No.", value: "1136/073/074" },
];

const CompanyProfile = () => {
  return (
    <div className="w-full p-6 md:p-10 lg:px-18 lg:py-20 rounded-lg shadow-lg space-y-16">
      <h2 className="text-primary-purple text-4xl font-bold font-roboto text-center">
        Company Profile
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {companyData.map((item, index) => (
          <div
            key={index}
            className="flex bg-primary-web flex-col space-y-2 p-4 bg-primary-light rounded-lg shadow-md hover:scale-105"
          >
            <h3 className="text-primary-yellow text-lg font-semibold">
              {item.label}
            </h3>
            {item.isLink ? (
              <a
                href={`https://${item.value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:underline"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-white text-sm">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfile;
