document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector('.slider');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentIndex = 1; // 초기에 첫 번째 이미지를 보여줍니다.
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // 슬라이드 너비를 가져옵니다.
    const slideWidth = slides[0].offsetWidth;
    
    // 맨 끝에 처음 슬라이드를 복제하여 무한 루프를 만듭니다.
    slider.append(slides[0].cloneNode(true));
    slider.prepend(slides[slides.length - 1].cloneNode(true));
    
    // 슬라이더 위치 초기화
    setPositionByIndex();
    
    slider.addEventListener('mousedown', startTouch);
    slider.addEventListener('touchstart', startTouch);
    
    slider.addEventListener('mouseup', endTouch);
    slider.addEventListener('touchend', endTouch);
    
    slider.addEventListener('mousemove', moveTouch);
    slider.addEventListener('touchmove', moveTouch);
    
    function startTouch(event) {
      if (event.type === 'mousedown') {
        startPos = event.clientX;
      } else {
        startPos = event.touches[0].clientX;
      }
      isDragging = true;
      animationID = requestAnimationFrame(animation);
    }
    
    function moveTouch(event) {
      if (isDragging) {
        let currentPosition;
        if (event.type === 'mousemove') {
          currentPosition = event.clientX;
        } else {
          currentPosition = event.touches[0].clientX;
        }
        currentTranslate = prevTranslate + currentPosition - startPos;
      }
    }
    
    function endTouch() {
      cancelAnimationFrame(animationID);
      isDragging = false;
      const threshold = slideWidth / 4;
    
      if (Math.abs(currentTranslate - prevTranslate) > threshold) {
        if (currentTranslate < prevTranslate) {
          currentIndex += 1;
        } else {
          currentIndex -= 1;
        }
      }
    
      setPositionByIndex();
    }
    
    function animation() {
      setSliderPosition();
      if (isDragging) requestAnimationFrame(animation);
    }
    
    function setSliderPosition() {
      slider.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function setPositionByIndex() {
      // 무한 슬라이드를 위해 currentIndex를 조정합니다.
      if (currentIndex === totalSlides + 1) {
        currentIndex = 2;
        currentTranslate = -slideWidth * currentIndex;
      } else if (currentIndex === 0) {
        currentIndex = totalSlides;
        currentTranslate = -slideWidth * currentIndex;
      } else {
        currentTranslate = -slideWidth * currentIndex;
      }
    
      prevTranslate = currentTranslate;
      setSliderPosition();
    
      // 현재 이미지 순서를 콘솔에 출력하는 방법을 추가할 수 있습니다.
      console.log(`현재 이미지 순서: ${getCurrentImageOrder()}`);
    }
    
    function getCurrentImageOrder() {
      if (currentIndex === totalSlides + 1) {
        return 1;
      } else if (currentIndex === 0) {
        return totalSlides;
      } else {
        return currentIndex;
      }
    }
    

});