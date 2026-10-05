// مادة تجريبية بمحاضرة واحدة — لمعاينة الشكل فقط (امسحيها بعد المعاينة)
subjects.push({
  name: 'مادة تجريبية',
  en: 'Sample',
  lectures: [
    {
      t: 'المحاضرة الأولى — تجريبية',
      d: 'وصف قصير للمحاضرة',
      pdf: 'https://example.com/lecture1.pdf',
      summary: { text: 'ملخص تجريبي قصير للمحاضرة.' },
      links: [
        { t: '🎥 تسجيل فيديو المحاضرة', d: 'مشاهدة التسجيل كاملاً', url: 'https://example.com/video' }
      ],
      questions: [
        { q: 'سؤال تجريبي رقم 1؟', options: ['الإجابة أ', 'الإجابة ب', 'الإجابة ج', 'الإجابة د'], correct: 1, translation: 'Sample question number 1?', explanation: 'شرح تجريبي: الإجابة ب هي الصحيحة لأن ...' },
        { q: 'سؤال تجريبي رقم 2؟', options: ['صح', 'خطأ'], correct: 0 }
      ]
    }
  ],
  testBanks: [{ t: 'بنك أسئلة المادة', d: 'أسئلة المحاضرة في اختبار واحد', lectures: [0] }]
});
