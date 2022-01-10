


const Topic = {
    // model
    NodeAdd : "topic_node_add",
    NodeRmv : "topic_node_remove",
    LinkConnect : "topic_link_connect",
    LinkDisconnect : "topic_link_disconnect",

    UpdateNodeParm : "topic_update_model_parm",
    UpdateGraphParm : "topic_update_graph_parm",

    NodeClick : "topic_node_click",
    NodeEditorClick : "topic_node_editor_click",

    // debug
    Upload : "topic_upload",    // 上传行为树模版文件
    Create : "topic_create",    // 基于某个模版，创建一个可运行的 Bot
    Step : "topic_step",        // 单步运行某个 Bot
    UpdateBlackboard : "topic_update_blackboard",    // 将运行 Bot 返回的数据写入到 blackboard
    UpdateChange : "topic_update_change",
    Focus: "topic_focus", // 加亮显示当前运行到的某个 Node

    // config
    ConfigUpdate : "topic_config_update",   // 配置项更新
    BotsUpdate : "topic_bots_update",
    RunningUpdate: "topic_running_update",
    ReportUpdate : "topic_report_update",

    FileSave : "topic_file_save",
    FileLoad : "topic_file_load",
    FileLoadGraph : "topic_file_load_graph",

    ReportSelect : "topic_report_select",

    // resize
    EditPlaneCodeMetaResize : "topic_plane_code&meta_resize",
    EditPlaneEditCodeResize : "topic_plane_edit&code_resize",
    EditPlaneEditChangeResize : "topic_plane_edit&change_resize",

    WindowResize : "topic_window_resize",
}

/*
    {
        name : "",
        id : "",
        param : {

        },
        display : {
            "x" : 10,
            "y" : 10
        }
        children : []
    }
*/

export default Topic;


