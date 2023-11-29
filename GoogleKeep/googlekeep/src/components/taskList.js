import "./taskList.css";
import KipFilet from "./kipFilet";

function TaskList() {
    return (
        <>
            <div className="task-list">
                <div className="task-wrap">
                    <div
                        className="task-container eNQpWc"
                        aria-label="Types Search Filters"
                        tabindex="0"
                    >
                        <div className="task-types">
                            <span>Types</span>
                        </div>
                        <div
                            className="tasks-labels"
                            role="listbox"
                            aria-expanded="true"
                        >
                            <div
                                className="tasks-item yOOK0-rTEl-zyxPWd"
                                tabindex="0"
                                role="option"
                            >
                                <div className="x5ghY-MJoBVe-yOOK0-haAclf">
                                    <div className="tasks-bg"></div>
                                    <div className="x5ghY-MJoBVe-yOOK0-V67aGc">
                                        Reminders
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tasks-item yOOK0-rTEl-rymPhb JbbQac-AHmuwe-i5vt6e"
                                tabindex="0"
                                role="option"
                            >
                                <div className="x5ghY-MJoBVe-yOOK0-haAclf">
                                    <div className="tasks-bg"></div>
                                    <div className="x5ghY-MJoBVe-yOOK0-V67aGc">
                                        Lists
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tasks-item yOOK0-rTEl-HiaYvf"
                                tabindex="0"
                                role="option"
                            >
                                <div className="x5ghY-MJoBVe-yOOK0-haAclf">
                                    <div className="tasks-bg"></div>
                                    <div className="x5ghY-MJoBVe-yOOK0-V67aGc">
                                        Images
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tasks-item yOOK0-rTEl-dZ8yzd JbbQac-AHmuwe-i5vt6e"
                                tabindex="0"
                                role="option"
                            >
                                <div className="x5ghY-MJoBVe-yOOK0-haAclf">
                                    <div className="tasks-bg"></div>
                                    <div className="x5ghY-MJoBVe-yOOK0-V67aGc">
                                        URLs
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskList;
