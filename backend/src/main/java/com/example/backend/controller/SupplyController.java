package com.example.backend.controller;

import com.example.backend.model.SupplyItem;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/api/supplies")
public class SupplyController {

    @GetMapping("/list")
    public List<SupplyItem> listSupplies() {
        // If we had more time, this data would come from a database.
        return Arrays.asList(
                new SupplyItem("Canned Beans", "Food", 50, "https://shorturl.at/PXFIh"),
                new SupplyItem("Gallon Water", "Water", 100, "https://shorturl.at/c6JSn"),
                new SupplyItem("Bandages", "Medical", 50, "https://shorturl.at/dlrH9"),
                new SupplyItem("Fire Woods", "Utilites", 50, "https://shorturl.at/mLo7f")
        );
    }

}
