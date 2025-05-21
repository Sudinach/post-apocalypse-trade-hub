package com.example.backend.model;

/**
 * Represents a tradable supply item in the tradehub. This class
 * holds information about the item's name, type, quantity and url of
 * the image
 */

public class SupplyItem {
    private String name;
    private String type;
    private int quantity;
    private String imageUrl;

    public SupplyItem() {
        // Default constructor
    }

    public SupplyItem(String name, String type, int quantity, String imageUrl) {
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}