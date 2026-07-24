# services/

**Responsabilidad:** comunicación con servicios externos (APIs, backends propios, integraciones de terceros).

**Archivos:** ninguno actualmente. El proyecto no tiene llamadas a servicios externos propios; el único `fetch()` (en `utils/loader.js`) carga fragmentos HTML locales, no es un servicio externo.

**Cuándo usarla:** al integrar un backend, una API de pagos, envío de emails real, etc.
