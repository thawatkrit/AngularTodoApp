import { animate, state, style, transition, trigger } from '@angular/animations';
 
export const slideInDownAnimation =
  trigger('routeAnimation', [ // การเคลื่อนไหวเมื่อเปลี่ยนแปลง ค่า routeAnimation
    state('*', // สภาวะที่กำลังแสดงอยู่
      style({
        opacity: 1, // แสดงผลและเห็นได้
        transform: 'translateX(0)' // ไม่มีการเปลี่ยนแปลงการเคลื่อนไหวใดๆ
      })
    ),
    transition(':enter', [  // การเปลี่ยนแปลงตอนเริ่มแสดง
      style({
        opacity: 0, // เริ่มจากมองไม่เห็นหรือไม่แสดง
        transform: 'translateX(-100%)' // เข้ามาจากทางด้านซ้ายมือจากขอบที่ติดลบ
      }),
      animate('0.2s ease-in') // ขยับเข้ามาแบบยืดหยุ่นภายใน 0.2 วินาที
    ]),
    transition(':leave', [ // การเปลี่ยนแปลงตอนปิด หรือสิ้นสุดการแสดง
      animate('0.5s ease-out', style({ // ขยับออกแบบยืดหยุ่นภายใน 0.5 วินาที
        opacity: 0, // สิ้นสุดที่มองไม่เห็น
        transform: 'translateY(100%)' // เลื่อนออกในเนวตั้งเลื่อนลงแบบค่อยๆ จางหาย
      }))
    ])
  ]);
 