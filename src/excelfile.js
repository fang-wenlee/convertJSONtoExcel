import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

export const ExportToExcel = ({ productData, userData }) => {
  const fileType = "xlsx";

  const exportToCSV = () => {
    const product1 = XLSX.utils.json_to_sheet(productData);
    const user1 = XLSX.utils.json_to_sheet(userData);

    const wb = {
      Sheets: { Product: product1, User: user1 },
      SheetNames: ["Product", "User"]
    };

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "myExcelfile.xlsx");
  };
  return <button onClick={exportToCSV}>Json To excel </button>;
};
