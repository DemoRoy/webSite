import React, { Component } from 'react';
import { Input, Button } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import style from './edit.less'
// import { Editor, EditorState, RichUtils } from 'draft-js';
// import 'draft-js/dist/Draft.css';

class EditComponent extends Component {
	state = {
		editorState: BraftEditor.createEditorState(null),
	};

 	async componentDidMount() {
    // const htmlContent = await fetchEditorContent();
    const htmlContent = null;
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    });
  };

  submitContent =  () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML();
    console.log(htmlContent);
    // const result = await saveEditorContent(htmlContent);
  };

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  };
  
	render() {
		const { editorState } = this.state;
		return (
			<div className={style.container}>
        <div className={style.console}>
          <Input placeholder="请在这里输入标题" />
        </div>
				<BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
        <div className={style.btnBox}>
          <Button style={{marginRight: '16px'}} type="primary">保存</Button>
          <Button>预览</Button>
        </div>
			</div>
		);
	}
}

module.exports = EditComponent;
