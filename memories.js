/*
  MEMORY DATA
  ------------
  Add as many photos as you want.

  Example:
  photos: [
    { src: "photos/2018/photo-01.jpg", caption: "Where it all began" },
    { src: "photos/2018/Screenshot_2019-10-13-08-30-12-505_com.whatsapp.jpg", caption: "A little moment" }
  ]

  Put your actual image files in the matching photos/YEAR/ folder.
*/

const memories = {
  2018: {
    title: "The Beginning",
    text: "The first chapter. The beginning of something beautiful.",
    photos: []
  },
  2019: {
    title: "A New Chapter",
    text: "More conversations, more laughter, more little memories.",
    photos: [
      { src: "photos/2019/IMG-20190729-WA0057.jpg", caption: "Where it all began" },
      { src: "photos/2019/IMG-20190729-WA0060.jpg" },
      { src: "photos/2019/IMG-20200303-WA0003.jpg", caption: "A little moment" },
      { src: "photos/2019/Screenshot_2019-10-13-08-30-12-505_com.whatsapp.png" }
    ]
  },
  2020: {
    title: "Still Us",
    text: "A chapter that taught us that distance never has to mean apart.",
    photos: [
      { src: "photos/2020/IMG20200307161250.jpg" },
      { src: "photos/2020/IMG20200307161258.jpg" },
      { src: "photos/2020/IMG20200307161306.jpg" },
      { src: "photos/2020/IMG20200307161436.jpg" },
      { src: "photos/2020/IMG_20200307_161651.jpg" },
      { src: "photos/2020/IMG_20200307_161656.jpg" },
      { src: "photos/2020/IMG_20200307_161816.jpg" }
    ]
  },
  2021: {
    title: "Growing Together",
    text: "New days, new dreams, and the same two people.",
    photos: [
      { src: "photos/2021/1634458192916.jpg" },
      { src: "photos/2021/Screenshot_2021-10-13-16-29-36-186_com.whatsapp.jpg" }
    ]
  },
  2022: {
    title: "More Memories",
    text: "Another year filled with moments worth keeping.",
    photos: []
  },
  2023: {
    title: "Our Little World",
    text: "The ordinary moments that became extraordinary memories.",
    photos: []
  },
  2024: {
    title: "Another Year, Another Story",
    text: "Still collecting moments, one photograph at a time.",
    photos: [
      { src: "photos/2024/IMG_20240212_222315.jpg" },
      { src: "photos/2024/IMG_20240516_114323.jpg" },
      { src: "photos/2024/IMG_20240621_104137.jpg" },
      { src: "photos/2024/IMG_20240628_202407.jpg" },
      { src: "photos/2024/IMG_20240628_202408.jpg" },
      { src: "photos/2024/IMG_20240803_001607.jpg" },
      { src: "photos/2024/IMG_20240803_001808.jpg" },
      { src: "photos/2024/IMG_20241107_195227.jpg" },
      { src: "photos/2024/IMG_20241107_195244.jpg" },
      { src: "photos/2024/IMG_20241231_182032.jpg" },
      { src: "photos/2024/IMG_20241231_182043.jpg" },
      { src: "photos/2024/Screenshot_2024-01-23-15-54-23-023_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-01-23-16-18-32-559_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-01-28-16-38-15-060_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-02-14-19-04-14-784_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-03-02-20-51-57-639_com.instagram.android.jpg" },
      { src: "photos/2024/Screenshot_2024-03-08-10-11-29-643_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-03-18-22-32-09-572_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-04-12-23-22-16-811_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-04-12-23-22-29-454_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-05-03-08-40-05-385_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-05-03-08-40-57-761_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-05-04-22-28-44-831_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-06-13-17-33-22-034_com.snapchat.android.jpg" },
      { src: "photos/2024/Screenshot_2024-06-24-11-24-50-838_com.snapchat.android.jpg" },
      { src: "photos/2024/Snapchat-1058304348.jpg" },
      { src: "photos/2024/Snapchat-1063975305.jpg" },
      { src: "photos/2024/Snapchat-1119564750.jpg" },
      { src: "photos/2024/Snapchat-1123433074.jpg" },
      { src: "photos/2024/Snapchat-1133857915.jpg" },
      { src: "photos/2024/Snapchat-114077800.jpg" },
      { src: "photos/2024/Snapchat-1143033456.jpg" },
      { src: "photos/2024/Snapchat-122221619.jpg" },
      { src: "photos/2024/Snapchat-1254196303~2.jpg" },
      { src: "photos/2024/Snapchat-1256178046.jpg" },
      { src: "photos/2024/Snapchat-1271099431.jpg" },
      { src: "photos/2024/Snapchat-1500396409.jpg" },
      { src: "photos/2024/Snapchat-1542375129.jpg" },
      { src: "photos/2024/Snapchat-1546094402.jpg" },
      { src: "photos/2024/Snapchat-1549801864.jpg" },
      { src: "photos/2024/Snapchat-155197272.jpg" },
      { src: "photos/2024/Snapchat-1655513640.jpg" },
      { src: "photos/2024/Snapchat-1692816572.jpg" },
      { src: "photos/2024/Snapchat-1703547749.jpg" },
      { src: "photos/2024/Snapchat-173082199.jpg" },
      { src: "photos/2024/Snapchat-1745486610.jpg" },
      { src: "photos/2024/Snapchat-1958746747.jpg" },
      { src: "photos/2024/Snapchat-1964083566.jpg" },
      { src: "photos/2024/Snapchat-1979862257.jpg" },
      { src: "photos/2024/Snapchat-2017230515.jpg" },
      { src: "photos/2024/Snapchat-2044331923.jpg" },
      { src: "photos/2024/Snapchat-2101171847.jpg" },
      { src: "photos/2024/Snapchat-241412080.jpg" },
      { src: "photos/2024/Snapchat-253916220.jpg" },
      { src: "photos/2024/Snapchat-276539230.jpg" },
      { src: "photos/2024/Snapchat-349115660.jpg" },
      { src: "photos/2024/Snapchat-358534202.jpg" },
      { src: "photos/2024/Snapchat-371838457.jpg" },
      { src: "photos/2024/Snapchat-411765386.jpg" },
      { src: "photos/2024/Snapchat-451327115.jpg" },
      { src: "photos/2024/Snapchat-587661436.jpg" },
      { src: "photos/2024/Snapchat-595622470.jpg" },
      { src: "photos/2024/Snapchat-641038128.jpg" },
      { src: "photos/2024/Snapchat-664074718.jpg" },
      { src: "photos/2024/Snapchat-668667541.jpg" },
      { src: "photos/2024/Snapchat-694699439.jpg" },
      { src: "photos/2024/Snapchat-728078669.jpg" },
      { src: "photos/2024/Snapchat-839069341.jpg" },
      { src: "photos/2024/Snapchat-903103027.jpg" },
      { src: "photos/2024/Snapchat-933433654.jpg" },
      { src: "photos/2024/Snapchat-956966198.jpg" },
      { src: "photos/2024/Snapchat-988826012.jpg" }
    ]
  },
  2025: {
    title: "Closer Than Ever",
    text: "Another chapter of us.",
    photos: [
      { src: "photos/2025/IMG-20250727-WA0009.jpg" },
      { src: "photos/2025/IMG-20250727-WA0084.jpg" },
      { src: "photos/2025/IMG-20250727-WA0087.jpg" },
      { src: "photos/2025/IMG-20250727-WA0088.jpg" },
      { src: "photos/2025/IMG-20250727-WA0093.jpg" },
      { src: "photos/2025/IMG-20250804-WA0006.jpg" },
      { src: "photos/2025/IMG-20250804-WA0013.jpg" },
      { src: "photos/2025/IMG-20250812-WA0005.jpg" },
      { src: "photos/2025/IMG-20250812-WA0013.jpg" },
      { src: "photos/2025/IMG-20250816-WA0011.jpg" },
      { src: "photos/2025/IMG-20250817-WA0066.jpg" },
      { src: "photos/2025/IMG-20250817-WA0069.jpg" },
      { src: "photos/2025/IMG-20250928-WA0020.jpg" },
      { src: "photos/2025/IMG_20250117_094903.jpg" },
      { src: "photos/2025/IMG_20250117_202407.jpg" },
      { src: "photos/2025/IMG_20250117_213827.jpg" },
      { src: "photos/2025/IMG_20250117_213912.jpg" },
      { src: "photos/2025/IMG_20250117_220623.jpg" },
      { src: "photos/2025/IMG_20250117_220648.jpg" },
      { src: "photos/2025/Screenshot_2025-04-25-14-55-17-063_com.google.android.apps.photos.jpg" },
      { src: "photos/2025/Screenshot_2025-06-22-16-01-26-781_com.miui.gallery.jpg" },
      { src: "photos/2025/Snapchat-1060350688.jpg" },
      { src: "photos/2025/Snapchat-1120186117.jpg" },
      { src: "photos/2025/Snapchat-118165260.jpg" },
      { src: "photos/2025/Snapchat-1279219208.jpg" },
      { src: "photos/2025/Snapchat-1416940506.jpg" },
      { src: "photos/2025/Snapchat-164214143.jpg" },
      { src: "photos/2025/Snapchat-275409394.jpg" },
      { src: "photos/2025/Snapchat-331933397.jpg" },
      { src: "photos/2025/Snapchat-40058401.jpg" },
      { src: "photos/2025/Snapchat-407782409.jpg" },
      { src: "photos/2025/Snapchat-618006608.jpg" },
      { src: "photos/2025/Snapchat-70719275.jpg" },
      { src: "photos/2025/Snapchat-917344266.jpg" }
    ]
  },
  2026: {
    title: "Still Writing",
    text: "The newest chapter — and definitely not the last.",
    photos: [
      { src: "photos/2026/PXL_20260312_143129068.NIGHT.jpg" },
      { src: "photos/2026/Snapchat-1006297923.jpg" },
      { src: "photos/2026/Snapchat-1009040414.jpg" },
      { src: "photos/2026/Snapchat-1029574474.jpg" },
      { src: "photos/2026/Snapchat-1276234448.jpg" },
      { src: "photos/2026/Snapchat-1678191664.jpg" },
      { src: "photos/2026/Snapchat-1683245196.jpg" },
      { src: "photos/2026/Snapchat-1721251436.jpg" },
      { src: "photos/2026/Snapchat-1743574824.jpg" },
      { src: "photos/2026/Snapchat-1749648788.jpg" },
      { src: "photos/2026/Snapchat-1923543644.jpg" },
      { src: "photos/2026/Snapchat-1927426679.jpg" },
      { src: "photos/2026/Snapchat-1978820287.jpg" },
      { src: "photos/2026/Snapchat-2030303608.jpg" },
      { src: "photos/2026/Snapchat-2058632957.jpg" },
      { src: "photos/2026/Snapchat-2082189025.jpg" },
      { src: "photos/2026/Snapchat-2123973042.jpg" },
      { src: "photos/2026/Snapchat-2139212417.jpg" }
    ]
  }
};
