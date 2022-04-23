import * as React from "react";
declare module "*.svg" {
	// 	import React = require("react");
	//   export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
	//   const src: string;
	//   export default src;
	// const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	// export default content;

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }>;
}

declare module "*.svg?component" {
	export const data: any;

}