---
layout: default
title: Документация
---

# Документация


<div style="display: flex; flex-direction: column; gap: 40px;">
  {% assign grouped_docs = site.pages | where_exp: "item", "item.path contains 'docs/'" | group_by: "project" %}

  {% for group in grouped_docs %}
    {% if group.name != "" and group.name != nil %}
      
      <section class="project-group">
        <h1 style="border-bottom: 2px solid rgb(38, 150, 38); padding-bottom: 10px; color: #e0e0e0;">
          {{ group.name }}
        </h1>

        <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: flex-start; margin-top: 20px;">
          {% for doc in group.items %}
            {% if doc.url != page.url %}
              <div style="flex: 1 1 calc(33.333% - 20px); min-width: 250px; border: 1px solid #eee; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                
                <h2 style="margin-top: 0; font-size: 1.3em;">
                  <a href="{{ doc.url | relative_url }}" style="text-decoration: none; color: rgb(38, 150, 38);">
                    {{ doc.title | default: doc.name }}
                  </a>
                </h2>

                {% if doc.description %}
                  <p style="font-size: 0.95em; color: #d4d4d4; line-height: 1.4;">
                    {{ doc.description }}
                  </p>
                {% endif %}
                
              </div>
            {% endif %}
          {% endfor %}
        </div>
      </section>

    {% endif %}
  {% endfor %}
</div>