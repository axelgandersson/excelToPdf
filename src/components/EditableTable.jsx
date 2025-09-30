import { DataGrid } from "@mui/x-data-grid";

// MUI's DataGrid komponent
// tar emot props-> data-objekt(rows/columns-array) från parent + upDateData funktion (callback till parent med uppdaterad data)
export default function EditableTable({ data, updateData }) {
  // skapar kolumner för DataGrid baserat på data.columns
  const gridColumns = data.columns.map((name) => ({
    field: name,
    headerName: name,
    minWidth: 150, // min bredd på kolumn
    editable: true, //gör cellerna redigerbara
    flex: 1, //ger autobredd
  }));

  // funktion som hanterar uppdatering av rows när en cell redigeras
  // mapar igenom data.rows, om id matchar den uppdaterade raden, returnera den uppdaterade rowen, annars behåll den gamla.
  const processRowUpdate = (updatedRow) => {
    const updated = data.rows.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    updateData(updated); //skicka upp de uppdaterade rowsen till parent-komponenten
    return updatedRow;
  };

  // anger rows utefter data(props)rows, och columns efter gridColumns.
  // processRowUpdate körs när en cell redigeras, skickar då uppdateringen till parent-komponenten via updateData (enter/klick utanför cellen)
  return (
    // wrapper div för att sätta höjd och bredd på DataGrid
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data.rows || []}
        columns={gridColumns}
        processRowUpdate={processRowUpdate}
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

          //  gör sorterings och menyikoner indigo ish istället för vit
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
