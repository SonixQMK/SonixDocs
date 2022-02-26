{% for vendor_id in site.data.vendors["_index"] %}
  {% assign vendor = site.data.vendors[vendor_id] %}

---

## {{vendor.manufacturer}}

<details>
  <summary>Click to expand!</summary>
  {% include table.html data=vendor.kb %}
</details>

{% endfor %}
