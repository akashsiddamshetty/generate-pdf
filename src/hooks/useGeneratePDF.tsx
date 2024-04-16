import jsPDF from "jspdf";
import { useForm } from "react-hook-form";
import autoTable from "jspdf-autotable";

interface iUserData {
  name: string;
  course: string;
}

const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toLocaleDateString();
};

const useGeneratePDF = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<iUserData>();

  const onSubmit = handleSubmit((data) => {
    const pdf = new jsPDF();
    const ref = "B101";
    const currentDate = getCurrentDate();
    pdf.setFontSize(12);
    pdf.text(`Ref: ${ref}`, 10, 20);

    pdf.text(`Name: ${data.name}`, 10, 30);
    pdf.text(`Course: ${data.course}`, 10, 40);

    pdf.text(`Date of Offer: ${currentDate}`, 10, 50);

    const tableData = [
      { year: "1", oneTimeFee: "600", tutionFee: "260" },
      { year: "2", oneTimeFee: "", tutionFee: "260" },
    ];
    autoTable(pdf, {
      startY: 60,
      head: [["Year", "One Time Fee", "Tution Fee"]],
      body: tableData.map((row) => [row.year, row.oneTimeFee, row.tutionFee]),
    });

    pdf.save(currentDate + ".pdf");
  });

  return { register, errors, onSubmit };
};

export default useGeneratePDF;
