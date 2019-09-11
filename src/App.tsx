import * as React from "react";
import { FilePond, registerPlugin } from "react-filepond";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export interface File {
  source: string;
  options: {
    type: string;
  };
}

export type FileUploadProps = { pond };

export function FileUpload({ pond }: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleInit = () => {
    console.log("testing", pond);
  };
  return (
    <FilePond
      // ref={ref => (pond = ref)} // useRef?
      files={files}
      allowMultiple={true}
      maxFiles={3}
      server="/api"
      oninit={() => handleInit()}
      onupdatefiles={(fileItems: File[]) =>
        setFiles(fileItems.map((fileItem: File) => fileItem.file))
      }
    />
  );
}

export default FileUpload;
