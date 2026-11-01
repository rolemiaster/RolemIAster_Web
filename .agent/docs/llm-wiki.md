# LLM Wiki

LLM Wiki es conocimiento persistente opcional para investigaciones, decisiones duraderas y contexto reutilizable.

Complementa el resto de `.agent/`:

- `skills/` define procedimientos especificos.
- `docs/` explica dominios del proyecto.
- `memory/` almacena hallazgos breves y verificados.
- `knowledge/` almacena conocimiento acumulado con fuentes.

## Activacion

El agente decide autonomamente si conviene usarlo. Usar el nivel minimo suficiente:

1. Consultar paginas existentes.
2. Actualizar una pagina concisa cuando se verifique conocimiento reutilizable.
3. Ingerir fuentes y sintetizar paginas solo para investigacion sustancial.

## Layout

```text
.agent/knowledge/
  raw/
  wiki/
    index.md
    log.md
    pages/
```

## Limites

No usar LLM Wiki para ediciones triviales, debugging localizado, cambios mecanicos o consultas estructurales cubiertas por CodeGraph. No duplicar mapas del codigo o del sitio que puedan regenerarse con busquedas.
