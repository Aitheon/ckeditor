import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Command from '@ckeditor/ckeditor5-core/src/command';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import attachIcon from '../../assets/attach.svg';

class AttachCommand extends Command {
  constructor(editor) {
    super(editor);
  }
}

export default class Attach extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add( 'attach', locale => {
      const view = new ButtonView( locale );

      view.set( {
        label: 'Add Attachment',
        icon: attachIcon,
        tooltip: true
      } );

      editor.commands.add( 'attach', new AttachCommand(editor));

      // Callback executed once the attach is clicked.
      view.on( 'execute', () => {
        editor.commands.get('attach').execute();
      });

      return view;
    } );
  }

  static get pluginName() {
    return 'Attach';
  }
}
