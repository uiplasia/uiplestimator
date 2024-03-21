import React, { useState } from 'react';
import ClientDetailCredential from './ClientDetailCredential';
import PrintPage from './PrintPage';
import CategorySubcategoryStyleK from './CategorySubcategoryStyleK';
import CategorySubcategoryStyleKTablePrint from './CategorySubcategoryStyleKTablePrint';

const ParentComponent = () => {

  const [formData, setFormData] = useState({
    clientName: '',
    projectId: '',
    propertyType: '',
    projectType: '',
    city: '',
    carpetArea: '',
    ceilingHeight: '',
    styling: '',
  });
  const [showCategorySubcategoryForm, setShowCategorySubcategoryForm] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [showPrintPage, setShowPrintPage] = useState(false);
  const handleNext = (data) => {
      const requiredFields = ['projectId', 'propertyType', 'projectType', 'city', 'carpetArea', 'ceilingHeight', 'styling'];
      const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
      return;
    }
  setFormData({ ...formData, ...data });
    setShowCategorySubcategoryForm(true);
  };
  const handlePrint = () => {
    setShowPrintPage(prevShowPrintPage => !prevShowPrintPage);
  };
  const handleBack = () => {
    setShowCategorySubcategoryForm(false);
  };
  const handleReturn= () => {
    setShowPrintPage(false);
  }
  const removeCircularReferences = (obj, seen = new WeakSet()) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    if (seen.has(obj)) {
      return;
    }
    seen.add(obj);
    if (Array.isArray(obj)) {
      return obj.map(item => removeCircularReferences(item, seen));
    }
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => [key, removeCircularReferences(value, seen)])
        .filter(([_, value]) => value !== undefined)
    );
  };

  const handleSubmit = (data) => {
    const updatedFormData = { ...formData, ...data };
    const cleanedFormData = removeCircularReferences(updatedFormData);
    setFormData(updatedFormData);
    setSubmittedData([...submittedData, cleanedFormData]);
  };

const buttons = document.querySelectorAll('button');
const buttonStyles = Array.from(buttons).map(button => button.style.display);

const handlePrintPage = () => {
  buttons.forEach((button, index) => {
    button.style.display = 'none';
  });

  window.print();

  // Show the buttons again after printing
  buttons.forEach((button, index) => {
    button.style.display = buttonStyles[index];
  });
};
  
  return (
    <div>
      {!showCategorySubcategoryForm && !showPrintPage && <ClientDetailCredential onNext={handleNext} formData={formData}/>}
      {showCategorySubcategoryForm && !showPrintPage && (
        <>
          <CategorySubcategoryStyleK
            onBack={handleBack}
            onSubmit={handleSubmit}
            onPrint={handlePrint}
            formData={formData}
          />
          {submittedData.map((data, index) => (
            <CategorySubcategoryStyleKTablePrint key={index} formData={data} index={index}/>
          ))}
        </>
      )}
      {showPrintPage && <PrintPage onPrintPage={handlePrintPage} onReturn={handleReturn} formData={formData} clientData={formData} submittedData={submittedData} />}  
    </div>
  );
};

export default ParentComponent;
