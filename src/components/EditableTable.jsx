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
    <div>
      <DataGrid
        rows={data.rows}
        columns={gridColumns}
        processRowUpdate={processRowUpdate}
        disableRowSelectionOnClick
      />
    </div>
  );
}
