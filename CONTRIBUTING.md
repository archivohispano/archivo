# Guía de Contribución / Contributing Guide

## Cómo Contribuir / How to Contribute

### 1. Proponer un Nuevo Texto / Propose a New Text

Use el template de GitHub Issues "Proponer Nuevo Texto" y proporcione:
- Título del texto
- Autor
- Fecha de publicación
- Fuente original
- El texto completo o un enlace

Use the GitHub Issues template "Submit New Text" and provide:
- Text title
- Author
- Publication date
- Original source
- Full text or link

### 2. Enviar una Traducción / Submit a Translation

Use el template "Enviar Traducción" y proporcione:
- Enlace al texto original en el archivo
- Su traducción completa
- Su nombre para atribución

Use the "Submit Translation" template and provide:
- Link to original text in archive
- Your complete translation
- Your name for attribution

### 3. Reportar Errores / Report Errors

Si encuentra errores en los textos:
1. Abra un Issue
2. Indique el texto y ubicación del error
3. Proporcione la corrección sugerida

If you find errors in texts:
1. Open an Issue
2. Indicate text and error location
3. Provide suggested correction

## Criterios de Inclusión / Inclusion Criteria

### Textos / Texts
- Deben ser de dominio público
- Relevancia histórica, política, literaria o filosófica
- Autoría hispanoamericana o sobre temas hispanoamericanos

- Must be public domain
- Historical, political, literary, or philosophical relevance
- Hispanic American authorship or topics

### Traducciones / Translations
- Traducciones profesionales (no automáticas)
- Manteniendo fidelidad al original
- Con atribución al traductor

- Professional translations (not automatic)
- Maintaining fidelity to original
- With translator attribution

## Proceso de Revisión / Review Process

1. **Envío / Submission**: Via GitHub Issues
2. **Revisión / Review**: Verificación de derechos y exactitud / Rights and accuracy verification
3. **Aprobación / Approval**: Por mantenedores del proyecto / By project maintainers
4. **Integración / Integration**: Creación de archivos Jekyll / Jekyll file creation

## Formato de Archivos / File Format

Los textos se almacenan en Markdown con front matter YAML:

Texts are stored in Markdown with YAML front matter:

```yaml
---
layout: text
lang: es
title: "Título del Texto"
author: nombre-del-autor
author_name: "Nombre del Autor"
date: YYYY-MM-DD
source: "Fuente Original"
---

Contenido del texto...
