import React from "react";
import { ContextStorage } from "./context/Context";
import GlobalStyle from "./styles/GlobalStyle";
import * as SC from "./styles/components/TaskStyles";
import TaskList from "./components/TaskList";
import { ModalTask } from "./components/FormItems";

const App = ()=>{

    const [modalView, setModalView] = React.useState(false);

    return (
        <ContextStorage>
            <section>
                <h1>To-do-List</h1>

                <TaskList />

                <div>
                    <SC.Button onClick={()=> setModalView(!modalView)}>
                        +
                    </SC.Button>
                </div>
            </section>

            {
                modalView ?
                <ModalTask setModalView={setModalView} />
                :
                null
            }

            <GlobalStyle />
        </ContextStorage>
    );
};

export default App;