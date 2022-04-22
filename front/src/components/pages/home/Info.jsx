import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdCheckCircle, MdError } from "react-icons/md";



import { Content, FileInfo } from "./styles";

const Info = ({ files }) => (
  <Content>
      {files.map(uploadedFile => (
          <li key={uploadedFile.id}>
            <FileInfo>
                <div>
                  <strong>{uploadedFile.name}</strong>
                    <span>
                      {uploadedFile.readableSize}
                    </span>
                </div>
            </FileInfo>
              <div>   
                {!uploadedFile.uploaded && !uploadedFile.error && (
                  <CircularProgressbar
                    styles={{
                  root: { width: 30 },
                  path: { stroke: "#33ab33" }
                  
                }}
                strokeWidth={10}
                    value={uploadedFile.progress}
                  />
                )}     
                    { uploadedFile.uploaded && <MdCheckCircle size={30} color="#33ab33" /> }        
                    { uploadedFile.error && <MdError size={30} color="#ff0000" />}
               </div>
              
          </li>

      ))} 
  </Content>
);

  export default Info;