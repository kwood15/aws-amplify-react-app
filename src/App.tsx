import React, { useRef } from 'react';
import { FilePond, FileProps, registerPlugin } from 'react-filepond';

// @ts-ignore - todo declare module 
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';

// @ts-ignore
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export interface File extends FileProps {
  source: string;
  options: {
    type: string;
  };
}

export type FileUploadProps = { 
  pond: string
};

export function FileUpload() {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleInit = () => {
    console.log('testing');
  };

  const pondRef = useRef(null);

  return (
    <FilePond
      ref={pondRef}
      // files={files}
      allowMultiple={true}
      maxFiles={3}
      server="/api"
      oninit={() => handleInit()}
      // onupdatefiles={(fileItems: File[]) =>
      //   setFiles(fileItems.map((fileItem: File) => fileItem.file))
      // }
    />
  );
}

export default FileUpload;
