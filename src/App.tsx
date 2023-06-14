// import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TaskList from "./components/TaskList";

const App = ()=>{

    return (
        <>
            <section>
                <h1>To-do-List</h1>

                <TaskList />
            </section>

            <GlobalStyle />
        </>
    );
};

export default App;