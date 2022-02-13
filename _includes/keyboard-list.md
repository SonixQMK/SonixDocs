{% for vendor_hash in site.data.vendors %}
  {% assign vendor = vendor_hash[1] %}

## {{vendor.manufacturer}}

<details>
  <summary>Click to expand!</summary>
  {% include table.html data=vendor.kb %}
</details>

{% endfor %}
