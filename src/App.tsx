import React, { useRef } from "react";
import { FilePond, registerPlugin, File } from "react-filepond";

// @ts-ignore - todo declare module
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";

// @ts-ignore
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface FileUploadProps {
  readonly name: string;
  // readonly size: number;
}

export function FileUpload(props: FileUploadProps) {
  const [files, setFiles] = React.useState<FileUploadProps[]>([]);

  const handleInit = () => {
    console.log("FilePond instance has initialised", pondRef);
  };

  const pondRef = useRef(null);

  return (
    <FilePond
      ref={pondRef}
      files={files}
      allowMultiple={true}
      maxFiles={6}
      server="/api"
      oninit={() => handleInit()}
      onupdatefiles={(fileItems: FileUploadProps[]) =>
        setFiles(
          fileItems.map((fileItem: FileUploadProps) => fileItem.file.name)
        )
      }
    />
  );
}

export default FileUpload;
