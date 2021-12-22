const images: image[] = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl: HTMLElement | null = document.querySelector(".gallery");

const imagesArray: string[] = images.map(({ url, alt }): string => {
  return `<li class="item item-img"><img class="image" src="${url}" alt="${alt}"></li>`;
});

imagesArray.forEach((element): void =>
  galleryEl?.insertAdjacentHTML("beforeend", element)
);
