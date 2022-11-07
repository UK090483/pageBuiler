// type masonryConfig = {
//   gutterX?: number | null;
//   gutterY?: number | null;
//   baseWidth: number;
//   gutter: number;
//   container: any;
//   minify: boolean;
//   ultimateGutter: number;
//   surroundingGutter: boolean;
//   direction: "ltr" | "rtl";
//   wedge: boolean;
// };

// const defaultConfig: masonryConfig = {
//   baseWidth: 255,
//   gutterX: 0,
//   gutterY: 0,
//   gutter: 10,
//   container: null,
//   minify: true,
//   ultimateGutter: 5,
//   surroundingGutter: true,
//   direction: "ltr",
//   wedge: false,
// };

// const defaultPrivates = {
//   _width: 0,
//   _count: 0,
// };

// export default class Masonry {
//   _sizes: number[] = [];
//   _columns: number[] = [];
//   //@ts-ignore
//   _container: HTMLElement = null;
//   _count = defaultPrivates._count;
//   _width = defaultPrivates._width;
//   _removeListener: null | (() => void) = null;
//   _currentGutterX: number = 0;
//   _currentGutterY: number = 0;
//   _resizeTimeout: NodeJS.Timeout | null = null;

//   conf: masonryConfig = defaultConfig;

//   constructor(conf: Partial<masonryConfig>) {
//     this.init(conf);
//   }

//   init(conf: Partial<masonryConfig>) {
//     for (var i in this.conf) {
//       const id = i as keyof masonryConfig;
//       if (conf[id] != undefined) {
//         //@ts-ignore
//         this.conf[id] = conf[id];
//       }
//     }

//     if (this.conf.gutterX == null || this.conf.gutterY == null) {
//       this.conf.gutterX = this.conf.gutterY = this.conf.gutter;
//     }
//     this._currentGutterX = this.conf.gutterX;
//     this._currentGutterY = this.conf.gutterY;

//     this._container =
//       typeof this.conf.container == "object" && this.conf.container.nodeName
//         ? this.conf.container
//         : document.querySelector(this.conf.container);

//     if (!this._container) {
//       throw new Error("Container not found or missing");
//     }
//     var onResize = this.resizeThrottler.bind(this);
//     window.addEventListener("resize", onResize);
//     this._removeListener = function () {
//       window.removeEventListener("resize", onResize);
//     };
//     this.layout();
//   }

//   resizeThrottler() {
//     if (!this._resizeTimeout) {
//       this._resizeTimeout = setTimeout(() => {
//         this._resizeTimeout = null;
//         //IOS Safari throw random resize event on scroll, call layout only if size has changed
//         if (this._container.clientWidth != this._width) {
//           this.layout();
//         }
//         // The actualResizeHandler will execute at a rate of 30fps
//       }, 33);
//     }
//   }
//   reset() {
//     this._sizes = [];
//     this._columns = [];
//     this._count = defaultPrivates._count;
//     this._width = this._container.clientWidth;
//     var minWidth = this.conf.baseWidth;
//     if (this._width < minWidth) {
//       this._width = minWidth;
//       this._container.style.minWidth = minWidth + "px";
//     }

//     if (this.getCount() == 1) {
//       // Set ultimate gutter when only one column is displayed
//       this._currentGutterX = this.conf.ultimateGutter;
//       // As gutters are reduced, two column may fit, forcing to 1
//       this._count = 1;
//     } else if (this._width < this.conf.baseWidth + 2 * this._currentGutterX) {
//       // Remove gutter when screen is to low
//       this._currentGutterX = 0;
//     } else {
//       this._currentGutterX = this.conf.gutterX;
//     }
//   }
//   getCount() {
//     if (this.conf.surroundingGutter) {
//       return Math.floor(
//         (this._width - this._currentGutterX) /
//           (this.conf.baseWidth + this._currentGutterX)
//       );
//     }

//     return Math.floor(
//       (this._width + this._currentGutterX) /
//         (this.conf.baseWidth + this._currentGutterX)
//     );
//   }
//   computeWidth() {
//     var width;
//     if (this.conf.surroundingGutter) {
//       width =
//         (this._width - this._currentGutterX) / this._count -
//         this._currentGutterX;
//     } else {
//       width =
//         (this._width + this._currentGutterX) / this._count -
//         this._currentGutterX;
//     }
//     width = Number.parseFloat(width.toFixed(2));

//     return width;
//   }
//   getNextColumn(index: number) {
//     return index % this._columns.length;
//   }

//   getShortest() {
//     var shortest = 0;
//     for (var i = 0; i < this._count; i++) {
//       if (this._columns[i] < this._columns[shortest]) {
//         shortest = i;
//       }
//     }

//     return shortest;
//   }

//   getLongest() {
//     var longest = 0;
//     for (var i = 0; i < this._count; i++) {
//       if (this._columns[i] > this._columns[longest]) {
//         longest = i;
//       }
//     }
//     return longest;
//   }
//   layout() {
//     if (!this._container) {
//       console.error("Container not found");
//       return;
//     }
//     this.reset();

//     //Computing columns count
//     if (this._count == null) {
//       this._count = this.getCount();
//     }

//     //Computing columns width
//     var colWidth = this.computeWidth();

//     for (var i = 0; i < this._count; i++) {
//       this._columns[i] = 0;
//     }

//     //Saving children real heights
//     var children = this._container.children as HTMLCollectionOf<HTMLElement>;
//     for (var k = 0; k < children.length; k++) {
//       // Set colWidth before retrieving element height if content is proportional
//       children[k].style.width = colWidth + "px";
//       this._sizes[k] = children[k].clientHeight;
//     }

//     var startX;
//     if (this.conf.direction == "ltr") {
//       startX = this.conf.surroundingGutter ? this._currentGutterX : 0;
//     } else {
//       startX =
//         this._width - (this.conf.surroundingGutter ? this._currentGutterX : 0);
//     }
//     if (this._count > this._sizes.length) {
//       //If more columns than children
//       var occupiedSpace =
//         this._sizes.length * (colWidth + this._currentGutterX) -
//         this._currentGutterX;
//       if (this.conf.wedge === false) {
//         if (this.conf.direction == "ltr") {
//           startX = (this._width - occupiedSpace) / 2;
//         } else {
//           startX = this._width - (this._width - occupiedSpace) / 2;
//         }
//       } else {
//         if (this.conf.direction == "ltr") {
//           //
//         } else {
//           startX = this._width - this._currentGutterX;
//         }
//       }
//     }
//   }

//   destroy() {
//     if (typeof this._removeListener == "function") {
//       this._removeListener();
//     }

//     var children = this._container.children as HTMLCollectionOf<HTMLElement>;
//     for (var k = 0; k < children.length; k++) {
//       children[k].style.removeProperty("width");
//       children[k].style.removeProperty("transform");
//     }
//     this._container.style.removeProperty("height");
//     this._container.style.removeProperty("min-width");
//   }
// }

export {};
