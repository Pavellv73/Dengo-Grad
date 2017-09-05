$(function () {

  // Базовые значения
  var sumValue = 5000,
    daysValue = 25,
    dayPercent = 0.0217,
    formState = 'default',
    stock3days = true; // флаг, включающий акцию "первые 3 дня бесплатно"

  var stateSettings = {
    'default': {
      sumMin: 2000,
      sumMax: 15000,
      daysMin: 7,
      daysMax: 30
    },
    'new': { // Для новых клиентов
      sumMin: 2000,
      sumMax: 15000,
      daysMin: 7,
      daysMax: 30
    }
  };



});