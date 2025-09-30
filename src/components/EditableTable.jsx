import { DataGrid } from "@mui/x-data-grid";

// MUI DataGrid component
export default function EditableTable({ data, updateData }) {
  // creates columns for the DataGrid from the data props
  const gridColumns = data.columns.map((name) => ({
    field: name,
    headerName: name,
    minWidth: 150,
    editable: true, // making the cells editable
    flex: 1,
  }));

  // update function that handles row updates when a cell is edited
  const processRowUpdate = (updatedRow) => {
    const updated = data.rows.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    updateData(updated);
    return updatedRow;
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data.rows || []}
        columns={gridColumns}
        processRowUpdate={processRowUpdate} // processRowUpdate is called by the DataGrid when a cell is edited, sending the update to the parent component via updateData (on enter/click outside the cell)
        disableRowSelectionOnClick
        columnBuffer={2}
        columnThreshold={2}
        hideFooterPagination={data.rows.length <= 100}
        sx={{
          backgroundColor: "rgb(30 41 59 / 0.8)",
          border: "1px solid rgb(51 65 85)",
          borderRadius: "8px",
          color: "rgb(248 250 252)",
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid rgb(51 65 85 / 0.3)",
            color: "rgb(226 232 240)",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "rgb(15 23 42 / 0.9)",
            borderBottom: "1px solid rgb(79 70 229 / 0.3)",
          },
          "& .MuiDataGrid-columnHeader": {
            color: "rgb(165 180 252)",
            fontWeight: 600,
          },

          "& .MuiDataGrid-sortIcon": { color: "rgb(129 140 248)" },
          "& .MuiDataGrid-columnHeader--sorted .MuiDataGrid-sortIcon": {
            color: "rgb(165 180 252)",
          },
          "& .MuiDataGrid-menuIcon": { color: "rgb(129 140 248)" },
          "& .MuiDataGrid-iconSeparator": { color: "rgba(99,102,241,0.35)" },
          "& .MuiDataGrid-columnHeaders .MuiIconButton-root": {
            color: "rgb(129 140 248)",
          },

          "& .MuiDataGrid-row:hover": {
            backgroundColor: "rgb(51 65 85 / 0.3)",
          },
          "& .MuiDataGrid-virtualScroller": {
            "&::-webkit-scrollbar": { width: "8px", height: "8px" },
            "&::-webkit-scrollbar-track": {
              background: "rgb(30 41 59 / 0.5)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgb(99 102 241 / 0.6)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "rgb(99 102 241 / 0.8)",
            },
          },
        }}
      />
    </div>
  );
}
