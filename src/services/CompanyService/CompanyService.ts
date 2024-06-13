export function CompanyService() {
  function getCompanyData() {
    return {
      name: 'Company Name',
      address: 'Company Address',
      phone: 'Company Phone',
      email: 'Company Email',
    };
  }

  return {
    getCompanyData,
  };
}
