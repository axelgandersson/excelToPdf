# Excel to PDF Converter

🌐 [View the App on GitHub Pages](https://axelgandersson.github.io/excelToPdf/)

This is a web-based utility for converting Excel files to PDF documents. Users can upload an Excel file, view its contents in an interactive table, edit the data directly in the browser, and then export the final table as a PDF. The application features a modern, dark-themed interface with drag-and-drop functionality.

## Features

- **Excel File Upload**: Supports uploading `.xlsx` and `.xls` files via a drag-and-drop zone or a traditional file selector.
- **Interactive Data Table**: Displays the content of the first sheet from the uploaded Excel file in an editable data grid powered by Material-UI.
- **In-Browser Editing**: Allows users to modify cell data directly within the table. Changes are saved instantly.
- **PDF Export**: Generates and downloads a PDF of the table data, including any edits made, using jsPDF.
- **Persistent State**: Uses browser `localStorage` to save the table data, so your work is not lost if you refresh the page.
- **Modern UI**: Built with React and styled with Tailwind CSS, featuring a responsive layout, a sleek dark theme, and subtle animations.

## Technologies Used

- **Frontend Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Material-UI](https://mui.com/) for the Data Grid
- **Excel Parsing**: [SheetJS (xlsx)](https://sheetjs.com/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) & [jspdf-autotable](https://github.com/simonbengtsson/jsPDF-AutoTable)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## How to Use

1.  **Upload a File**: Drag and drop your Excel file onto the upload area, or click the area to open your file browser and select a file.
2.  **View and Edit Data**: The data from the first sheet of your file will appear in a table. Click on any cell to edit its content. Press `Enter` or click outside the cell to confirm your changes.
3.  **Export to PDF**: Once you are satisfied with the data, click the "Export to PDF" button. A PDF file named `export.pdf` will be downloaded to your device.
4.  **Clear Data**: To upload a new file, click the "Remove File" button to clear the current table.

## Local Development

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/axelgandersson/exceltopdf.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd exceltopdf
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to the local URL provided by Vite (e.g., `http://localhost:5173`).
