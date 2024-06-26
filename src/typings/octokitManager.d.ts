// types <
export type IterateReadmeArchiveCallback = (data: ReadmeData) => void;

// >


// interfaces <
export interface ConstructorParams {

   octokitOwner: string;
   octokitToken: string;
   githubUsers: string[];
   readmeFileName: string;
   excludedBranches: string[];

}


export interface ReadmeFilePath {

   'url': string;
   'repo': string;
   'owner': string;
   'branch': string;

}


export interface ReadmeData {

   'content': string;
   'filepath': ReadmeFilePath;

}

// >