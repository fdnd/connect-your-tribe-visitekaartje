## Setup
If you haven't generated this project you'll need to run `npm install`.

## Running the project
```
npm run dev
```

## Current Components:

- [Cover.svelte](./src/lib/deck/slides/Cover.svelte)
If you want to use the cover component, you need to pass the following data, easiest way is to do it through the [slide-content.js](./src/lib/deck/slide-content.js) file:
```js
export const slideContent = [
  {
    slideType: Cover,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      classes: "large-heading", // choose large-, or medium-heading if presentation name is too long
      sprintNr: {
        content: `{Sprint nummer}`,
      },
      presentationName: {
        content: `{presentatie naam}`,
      },
      type: {
        content: "{les type, bijv. workshop}",
      },
      emojis: {
        content: ["🚀", "💪", "="],
      }
    }
  }
];
```
- [PhotoCollage.svelte](./src/lib/deck/slides/PhotoCollage.svelte)
If you want to use the photo collage component, you need to pass the following data, easiest way is to do it through the [slide-content.js](./src/lib/deck/slide-content.js) file:
```js
export const slideContent = [
  {
    slideType: PhotoCollage,
    transition: "fade",
    data: {
      customGrid: false, // optional, Number of columns
      objectFit: "cover", 
      gap: false, // optional, default is false
      padding: false, // optional, default is false
      background: false, // optional, default is false (use a css variable here)
      customPill: { // optional
        text: "{Custom Pill}", 
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      images: [
        {
          type: "image",
          src: "{src}", // add images to the static folder and link like this: ./img.jpg
          alt: "{alt}",
        },
      ],
      caption: "{caption}", // optional
      captionPosition: "right center",
    },
  }
];
```
- [Planning.svelte](./src/lib/deck/slides/Planning.svelte)
If you want to use the planning component, you need to pass the following data, easiest way is to do it through the [slide-content.js](./src/lib/deck/slide-content.js) file:
```js
export const slideContent = [
  {
    slideType: Planning,
    transition: "fade",
    data: {
      customPill: { // optional
        text: "{Custom Pill}",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      title: {
        content: "{Title}",
        level: 1,
        classes: "xlarge-heading",
      },
      progress: 0, // 0 is the first item, strikes through items before this number
      list: ["{Item}", "{Item}"],
    }
  }
];
```
- [Quote.svelte](./src/lib/deck/slides/Quote.svelte)
If you want to use the quote component, you need to pass the following data, easiest way is to do it through the [slide-content.js](./src/lib/deck/slide-content.js) file:
```js
export const slideContent = [
  {
    slideType: Quote,
    transition: "fade",
    data: {
      quote: {
        content: "{Quote}",
        classes: "large-heading",
      },
      author: {
        content: "{Author}",
        classes: "small-heading",
      },
    }
  }
];
```
- [TextColumns.svelte](./src/lib/deck/slides/TextColumns.svelte)
If you want to use the text columns component, you need to pass the following data, easiest way is to do it through the [slide-content.js](./src/lib/deck/slide-content.js) file:
```js
export const slideContent = [
  {
    slideType: TextColumns,
    transition: "fade",
    data: {
      customPill: {
        text: "{Custom Pill}",
        color: "var(--c-text)",
        background: "var(--c-highlight)",
        position: "top left",
      },
      columns: [
        {
          pointer: {
            text: "{Pointer}",  
            color: "var(--c-text)",
            background: "var(--c-highlight)",
            position: "top right",
          },
          title: {
            content: "{Title}",
            level: 2,
            classes: "medium-heading",
          },
          text: {
            content: "{Content}",
            classes: "small-heading",
          },
        },
      ],
    }
  }
];
```


## Building the project
Create a new repo on FDND's github organization and push the project to it.

Make sure that GitHub Pages is activated in the repository settings and the source is set to GitHub Actions, every push to main will trigger a build and deploy the project to GitHub Pages.