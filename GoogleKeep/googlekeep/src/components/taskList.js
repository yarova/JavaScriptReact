import "./taskList.css";
import KipFilet from "./kipFilet";

function TaskList() {
    return (
        <>
            <div className="task-list">
                <div className="task-wrap">
                    <div
                        className="task-container"
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
                                className="tasks-item task-reminders"
                                tabindex="0"
                                role="option"
                            >
                                <div className="task">
                                    <div className="tasks-bg"></div>
                                    <div className="task-text">Reminders</div>
                                </div>
                            </div>
                            <div
                                className="tasks-item task-lists"
                                tabindex="0"
                                role="option"
                            >
                                <div className="task">
                                    <div className="tasks-bg"></div>
                                    <div className="task-text">Lists</div>
                                </div>
                            </div>
                            <div
                                className="tasks-item task-images"
                                tabindex="0"
                                role="option"
                            >
                                <div className="task">
                                    <div className="tasks-bg"></div>
                                    <div className="task-text">Images</div>
                                </div>
                            </div>
                            <div
                                className="tasks-item task-urls"
                                tabindex="0"
                                role="option"
                            >
                                <div className="task">
                                    <div className="tasks-bg"></div>
                                    <div className="task-text">URLs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="notes-wrap">
                    <div className="notes-container">
                        <div
                            role="button"
                            className="select-item"
                            data-tooltip-text="Select note"
                            aria-label="Select note"
                            aria-disabled="false"
                            tabindex="0"
                        ></div>

                        <div
                            role="button"
                            className="Q0hgme-LgbsSe Q0hgme-Bz112c-LgbsSe RmniWd-rymPhb VIpgJd-LgbsSe"
                            data-tooltip-text="New list"
                            aria-label="New list"
                            aria-disabled="false"
                            tabindex="0"
                        ></div>

                        <div
                            role="button"
                            className="Q0hgme-LgbsSe Q0hgme-Bz112c-LgbsSe RmniWd-nA1mMd-h1U9Be VIpgJd-LgbsSe"
                            data-tooltip-text="New note with drawing"
                            aria-label="New note with drawing"
                            aria-disabled="false"
                            tabindex="0"
                        ></div>

                        <div
                            role="button"
                            className="Q0hgme-LgbsSe Q0hgme-Bz112c-LgbsSe RmniWd-HiaYvf-h1U9Be VIpgJd-LgbsSe"
                            data-tooltip-text="New note with image"
                            aria-label="New note with image"
                            aria-disabled="false"
                            tabindex="0"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskList;
