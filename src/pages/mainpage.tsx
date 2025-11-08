
import { Loading } from "../components/Loading/loading";
import QcDataTable from "../components/QcDataTable/QcDataTable";
import type { Column } from "../components/QcDataTable/QcDataTypes";
import { usePagination } from "../hooks/usePagination";
import { useUsers, type User } from "../hooks/useUsers";

const MainPage = () =>{

const { users, loading, error, retry } = useUsers();

const { 
  page,
  totalPages,
  currentData,
  next,
  prev,
  goTo
} = usePagination(users, 5);

const columns: Column<User>[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" }
  ];

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return (
      <div className="errorContainer">
        <p>Error: {error}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }


    return(
        <div className="mainContainer">
            <QcDataTable<User> rowdata={currentData} columns={columns} onRowSelect={(row) => console.log("Selected:", row)} />
              <div className="paginationContainer">
                  <button onClick={prev} disabled={page === 1}> Prev</button>
                  <span>Page {page} / {totalPages}</span>
                  <button onClick={next} disabled={page === totalPages}>Next</button>
              </div>
        </div>
    )
}

export default MainPage;
