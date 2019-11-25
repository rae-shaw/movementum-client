import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import FolderContext from '../FolderContext.js';
import FolderApiService from '../services/folder-api-services.js';
import FolderItem from '../FolderItem/FolderItem.js';


export default function FullFolders (props){

	
	const [folders, setFolders ] = useState([])
	const [error, setError ] = useState('')

	useEffect( () => {

		FolderApiService.getFolders()
	        .then(responseData => {
	        	console.log('responseData', responseData)
	            setFolders(
	                responseData
	            )
	        })
	        .catch(error => {
	            console.error(error)
	            setError( error )
	        })
	}, [folders.length])

	// const handleAddFolder = folder => {
 //    	setFolders(
 //      		[
 //        		...folders,
 //        		folder
 //      		]
 //    	)
 //  	}
		// const folderContextValue ={
		// 	folders: folders,
		// 	addFolder: handleAddFolder
		// }
		if (props.match.path === '/main'){
		
		const foldersToRender= folders.map((folder, i) => {
			const folderIdPath=`main/${folder.id}`
			return(<FolderItem {...folder} key={folder.id} folderIdPath ={folderIdPath}/>)
		})
		console.log('*******', foldersToRender)

		//console.log('CONTEXT', context.folders)
		//console.log('State', this.state)

		return(
			<main>
		    	<section>
		        	<header>
		            	<h2>Folders</h2>
		        	</header>
		        	<div>
		        	{foldersToRender}
		        	</div>
		        	<Link to = '/addfolder'>
		        		<button type='button'>Add Folder</button>
		        	</Link>
		      	</section>
			</main>
		)
	}else{

		const currentFolder = props.match.params.folderId;
		console.log('currentFolder', currentFolder)
		const foldersToRender = folders.map((folder, i) => {
			const folderIdPath=`main/${folder.id}`
			return (<FolderItem{...folder} highlighted = {currentFolder === folder.id} key={i} folderIdPath={folderIdPath} />)
		})
		return(
			<main>
		    	<section>
		        	<header>
		            	<h2>Folders</h2>
		        	</header>
		        	<div>
		        	{foldersToRender}
		        	</div>
		        	<Link to = '/addfolder'>
		        		<button type='button'>Add Folder</button>
		        	</Link>
		      	</section>
			</main>
		)
	
	}
}



