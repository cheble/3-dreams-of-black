//--- Texture Vertex Shader ---

THREE.WebGLShaderDefinitions.textureVertex = (function() {
	
	return [
	
		"uniform	mat4 	uCameraInverseMatrix;",
		"uniform 	mat4 	uCameraPerspectiveMatrix;",
		"uniform 	mat4 	uMeshGlobalMatrix;",
		
		"attribute 	vec4 	aVertices;",
		"attribute	vec2	aUVs;",
		
		"varying 	vec2	vUV;",
		
		"void main(void)",
		"{",
			"vUV = aUVs;",
			"gl_Position = uCameraPerspectiveMatrix * uCameraInverseMatrix * uMeshGlobalMatrix * aVertices;",
		"}"
	].join( "\n" );

}());


//--- Texture Fragment Shader ---

THREE.WebGLShaderDefinitions.textureFragment = (function() {
	
	return [ 	
	
		"#ifdef GL_ES",
			"precision highp float;",
		"#endif",		

		"uniform	sampler2d	uMap0;",
		"varying	vec2		vUV;",

		"void main( void )",
		"{",
			"gl_FragColor = texture2D( uMap0, vUV );",
		"}"
	].join( "\n" );

}());