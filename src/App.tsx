// import React from "react";
import { ContextStorage } from "./context/Context";
import GlobalStyle from "./styles/GlobalStyle";
import TaskList from "./components/TaskList";

const App = ()=>{

    return (
        <ContextStorage>
            <section>
                <h1>To-do-List</h1>

                <TaskList />
            </section>

            <GlobalStyle />
        </ContextStorage>
    );
};

export default App;